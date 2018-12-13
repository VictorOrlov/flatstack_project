import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PrevIcon from 'react-icons/lib/fa/chevron-left';
import NextIcon from 'react-icons/lib/fa/chevron-right';
import qs from 'qs';
import { NavLink, withRouter } from 'react-router-dom';
import Link from 'components/atoms/Link';
/*
Компонент реализованный в данном файле создаёт навигатор по страницам следующего вида:
(1) 2 3 ... 100 >
< 1 (2) 3 4 ... 100 >
< 1 2 (3) 4 5 ... 100 >
< 1 2 3 (4) 5 6 ... 100 >
< 1 ... 3 4 (5) 6 7 ... 100 >
...
< 1 ... 95 96 (97) 98 99 100 >
...
< 1 ... 98 99 (100) >
*/
/*
В этой переменной записано количество ссылок на соседние страницы.
Например, если показывается такое: [1 ... 5 6 (7) 8 9 ... 100] то эта переменная равна четырём (потому что считаются 5, 6, 8 и 9)
Если показывается такое: [1 ... 6 (7) 8 ... 100] то эта переменная равна двум (потому что считаются 6 и 8)
То есть данная переменная может иметь только чётные значения
*/
const IDK_HOW_TO_NAME_THIS_VAR = 4;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -0.2em;
`;
const PageLink = styled(Link.withComponent(NavLink))`
  text-decoration: none;
  border-radius: 0.25em;
  padding: 0.3em 0.7em;
  background-color: ${({ theme }) => theme.colors.neutral5};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.2em;
  user-select: none;
  &.active {
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
const Ellip = styled.div`
  padding: 0.3em 0.7em;
  margin: 0.2em;
`;
const makeLink = (pathname, queryParams, page) => ({
  pathname,
  search: qs.stringify({ ...queryParams, page: page === 1 ? undefined : page }),
});
const Pagination = ({
  total, location, currentPage, className,
}) => {
  if (total <= 1) {
    return null;
  }
  const queryParams = qs.parse(location.search, { ignoreQueryPrefix: true });
  return (
    <Wrapper className={className}>
      {currentPage > 1 && (
        <PageLink
          to={makeLink(location.pathname, queryParams, currentPage - 1)}
          isActive={() => false}
        >
          <PrevIcon />
        </PageLink>
      )}
      <PageLink to={makeLink(location.pathname, queryParams, 1)} isActive={() => currentPage === 1}>
        1
      </PageLink>
      {currentPage > IDK_HOW_TO_NAME_THIS_VAR && <Ellip>&hellip;</Ellip>}
      {Array(Math.min(IDK_HOW_TO_NAME_THIS_VAR / 2, Math.max(currentPage - 2, 0)))
        .fill()
        .map((_, i, a) => {
          const pageNumber = currentPage - a.length + i;
          return (
            <PageLink
              to={makeLink(location.pathname, queryParams, pageNumber)}
              isActive={() => false}
              key={pageNumber}
            >
              {pageNumber}
            </PageLink>
          );
        })}
      {currentPage > 1
        && currentPage < total && (
          <PageLink
            to={makeLink(location.pathname, queryParams, currentPage)}
            isActive={() => true}
          >
            {currentPage}
          </PageLink>
      )}
      {Array(Math.min(IDK_HOW_TO_NAME_THIS_VAR / 2, Math.max(total - currentPage - 1, 0)))
        .fill()
        .map((_, i) => {
          const pageNumber = currentPage + i + 1;
          return (
            <PageLink
              to={makeLink(location.pathname, queryParams, pageNumber)}
              isActive={() => false}
              key={pageNumber}
            >
              {pageNumber}
            </PageLink>
          );
        })}
      {total - (currentPage - 1) > IDK_HOW_TO_NAME_THIS_VAR && <Ellip>&hellip;</Ellip>}
      <PageLink
        to={makeLink(location.pathname, queryParams, total)}
        isActive={() => currentPage === total}
      >
        {total}
      </PageLink>
      {currentPage < total && (
        <PageLink
          to={makeLink(location.pathname, queryParams, currentPage + 1)}
          isActive={() => false}
        >
          <NextIcon />
        </PageLink>
      )}
    </Wrapper>
  );
};
Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
};
export default withRouter(Pagination);
