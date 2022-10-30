// Add imports above this line
import { galleryItems } from "./gallery-items";
import SimpleLightbox from "simplelightbox";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

galleryItems.forEach((elem) => {
  //console.log(elem);
  const elemEl = document.createElement("div");
  elemEl.classList.add("gallery__item");

  const ahref = document.createElement("a");
  ahref.classList.add("gallery__link");
  ahref.setAttribute("href", elem.original);
  elemEl.append(ahref);

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.setAttribute("src", elem.preview);
  img.setAttribute("data-source", elem.original);
  img.setAttribute("alt", elem.description);
  ahref.append(img);

  galleryEl.append(elemEl);
});
let pictures = document.querySelectorAll("a.gallery__link");
for (let i = 0; i < pictures.length; i++) {
  // pictures[i] = document.querySelector("a.gallery__link")
  pictures[i].onclick = (event) => {
    event.preventDefault();
    let elem = event.currentTarget;
    let img = elem.querySelector(".gallery__image");
    let source = img.getAttribute("data-source");
    basicLightbox
      .create(`<img width="1400" height="900" src="${source}">`)
      .show();
  };
}
