import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as S from './styles';

import tagActions from 'src/redux/tag/actions';

function App() {
  const dispatch = useDispatch();
  const tags = useSelector((state: any) => state.tag.data);

  useEffect(() => {
    dispatch(tagActions.fetchTag());
  }, []);

  return (
    <S.App>
      <S.Search>
        <S.Input
          type="text"
          placeholder="tag"
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
              <S.Tag>{ tag.name }</S.Tag>
            )
          }
        </S.TagContainer>
      </div>
      <div className="question-container">
        <div className="question">
          <div className="content">
            <p>javascript. How to calculate??</p>
            <div className="meta">
              <div className="score">
                <div>Score</div>
                <div>5</div>
              </div>
              <div className="answers">
                <div>Answers</div>
                <div>5</div>
              </div>
              <div className="Viewed">
                <div>Viewed</div>
                <div>41</div>
              </div>
            </div>
          </div>
          <div className="avatar">
            <div className="image">
              <img src="" alt="" />
            </div>
            sandthorn
          </div>
        </div>
      </div>
    </S.App>
  );
}

export default App;
