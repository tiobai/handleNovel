const mediaQuery = `
@media (max-width: 768px) {
    .list { display: none; }
    .icon_menu { cursor: pointer;}
    .list_mobile {
        position: absolute;
        left: 0;
        top: 60px;
        width: 70%;
        height: 100%;
        background: var(--bg-active);
        backdrop-filter: blur(20px);
        border: var(--color-border);
        border-left: 0;
        animation: fadeIn 0.5s linear;
        z-index: 100;
    }
    .list_mobile li {
        border-bottom: 1px solid var(--color-light);
    }
    .list_mobile li a {
        display: block;
        padding: 1rem;
    }
}
@media screen and (min-width: 769px) {
    .icon_menu { display: none; }
    .list_mobile {
        display: flex;
        gap: 20px;
        margin-right: 20px;
    }
    img { width: 35px; height: 35px; }
}    

`;
const style = `
:host {
  color: var(--color-light);
  
}
img {
    width: 40px;
    height: 40px;
}
nav { 
    padding: 10px; 
}
li { 
    display: flex; 
    align-items: center; 
    cursor: pointer; 
}
.nav_active { 
    background: var(--bg-active); 
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
h1 { margin: 0; cursor: pointer; }
.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.no_show { display: none; }

${mediaQuery}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

`;
export default style;
