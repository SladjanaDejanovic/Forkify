import View from './View';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // const generatePageButtons = function (currentPage, totalPages) {
    //   const pages = [];

    //   for (let i = 1; i <= totalPages; i++) {
    //     if (i === currentPage) {
    //       pages.push(renderButton(i, 'current'));
    //     } else if (i === 1 && currentPage !== 1) {
    //       pages.push(renderButton(i, 'prev'));
    //     } else if (i === totalPages && currentPage !== totalPages) {
    //       pages.push(renderButton(i, 'next'));
    //     } else if (i === 1 && totalPages === 1) {
    //       pages.push(renderButton(i, 'current'));
    //     } else if (i >= currentPage - 1 && i <= currentPage + 1) {
    //       pages.push(renderButton(i, 'other'));
    //     }
    //   }

    //   return pages.join('');
    // };

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return `<button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
      <span>Page ${curPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return `
      <button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>
      `;
    }

    // Other page
    if (curPage < numPages) {
      return `<button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
    </button>
    <button data-goto="${
      curPage + 1
    }" class="btn--inline pagination__btn--next">
      <span>Page ${curPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;
    }

    // Page 1, and there are no other pages
    return '';

    /*
    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return `
      ${generatePageButtons(curPage, numPages)}
      <button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>`;
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return `
      <button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
      </button>
      ${generatePageButtons(curPage, numPages)}
    `;
    }

    // Other page
    if (curPage < numPages) {
      return `
      ${generatePageButtons(curPage, numPages)}
      <button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>`;
    }

    // Page 1, and there are no other pages
    return '';*/
  }
}

export default new PaginationView();
