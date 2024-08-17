const style = () => {
  const style = document.createElement("style");
  style.textContent = `  
h1 {
    margin: 5px 5px 10px 5px;
    padding: 5px 0;
    text-align: center;
    text-shadow: 2px 5px 4px;
    border: var(--color-border);
    border-radius: 10px;
    color: #fff;
}

#cuerpo {
    display: flex;
    margin: 0px 5px 0px 5px;
    gap: 4%;
    row-gap: 10px;
    flex-wrap: wrap;
}

.caja {
    width: 48%;
    height: 250px;
    cursor: pointer;
}

.caja a {
    height: 100%;
    padding: 0;
    display: block;
}

p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    text-align: center;
    padding: 7px 5px 7px 5px;
    font-size: 0.89em;
    color: #fff;
    position: relative;
    top: -101.5%;
    background: rgb(29 29 30 / 70%);
    pointer-events: none;
}

span {
    position: relative;
    display: block;
    color: #fff;
    font-size: 0.8em;
    padding: 5px;
    pointer-events: none;
}

.span_top {
    padding: 0;
    top: -100%;
    display: flex;
    justify-content: space-between;
    margin-left: 5px;
    margin-right: 5px;
}

.star {
    width: 16px;

}

.item_raiting {
  padding: 1px 0 0 0;
  font-size: 1em;
}
.span_top .manga {
    background: #a320e3bd;
    padding: 2px 5px;
    border-radius: 2px;
}

.span_top .raiting {
    background: rgb(29 29 30 / 70%);
    padding: 3px 5px;
    display: flex;
}

.span_bottom {
    background: rgb(29 29 30 / 70%);
    top: -35.8%;
    text-align: center;
    padding: 8px 0;
}

img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    opacity: 0.85;
}

@media screen and (min-width: 500px) {
  #cuerpo {
    gap: 2%;
    row-gap: 10px;
  }
  .caja {
    width: 32%;
  }
}


@media screen and (min-width: 768px) {
   #cuerpo {
      gap: 1.333%;
      row-gap: 10px;
    }   
  .caja {
    width: 24%;
  }
}

@media screen and (min-width: 1024px) {
  #cuerpo {
    gap: 0.8%;
    row-gap: 10px;
    margin: 0px 10px 0px 10px;
  }

  h1 {
    margin: 5px 10px 10px 10px;
  }
  .caja {
    width: 16%;
}
  `;
  return style;
};

export default style;
