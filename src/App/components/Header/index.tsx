import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { useAsync } from 'react-async-hook';
import useConstant from 'use-constant';

import tagActions from 'src/redux/tag/actions';

import * as S from './styles';

interface IProps {
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
}

function Header({ selectedTag, setSelectedTag }: IProps) {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const tags = useSelector((state: any) => state.tag.data);

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
  }

  const handleSearchChange = (event: any) => {
    const { value } = event.target;
    setSearch(value);
  }

  const debouncedTagSearch = useConstant(() =>
    AwesomeDebouncePromise((search: string) => {
      dispatch(tagActions.fetchTag(search))
    }, 1000)
  );

  useAsync(
    async () => {
      if (search) {
        debouncedTagSearch(search);
      }
    },
    [search]
  );

  useEffect(() => {
    dispatch(tagActions.fetchTag());
  }, [dispatch]);

  return (
    <S.Header>
      <S.Search>
        <S.Input
          type="text"
          placeholder="tag"
          onChange={handleSearchChange}
          value={search}
        />
        <S.Button>
          Search
        </S.Button>
      </S.Search>
      <div>
        <h3>Trending</h3>
        <S.TagContainer>
          {
            tags.map((tag: any) =>
              <S.Tag
                key={tag.name}
                onClick={() => handleTagClick(tag.name)}
                className={
                  classNames({ 'active': selectedTag === tag.name })
                }
              >{ tag.name }</S.Tag>
            )
          }
        </S.TagContainer>
      </div>
    </S.Header>
  )
}

export default Header;
