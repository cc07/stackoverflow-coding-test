import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as S from './styles';

import tagActions from 'src/redux/tag/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tagActions.fetchTag());
    console.log('123');
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
          <S.Tag className="active">javascript</S.Tag>
          <S.Tag>javascript</S.Tag>
          <S.Tag>javascript</S.Tag>
          <S.Tag>javascript</S.Tag>
          <S.Tag>javascript</S.Tag>
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
