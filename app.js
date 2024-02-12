const projectButtons = document.querySelectorAll('.portfolio-list-item-button');

        projectButtons.forEach(button => {
            button.addEventListener('click', function () {
                const container = this.nextElementSibling;
                const contentHeight = container.scrollHeight + 'px';
                const linea = this.querySelector('.line');

                if (container.classList.contains('expand-project')) {
                    linea.classList.remove('rotate-line');
                    container.style.maxHeight = '0';
                    container.classList.remove('expand-project');
                } else {
                    linea.classList.add('rotate-line');
                    container.style.maxHeight = contentHeight;
                    container.classList.add('expand-project');
                }
            });
        });