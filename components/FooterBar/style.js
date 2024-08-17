const style = document.createElement("style");
style.textContent = `
            .footer {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 50px;
                color: white;
                font-size: 1.2rem;
                margin-top: 10px;
            }
            @media (max-width: 400px) {
                .footer {
                    font-size: 1rem;
                }
            }
        `;

export default style;
