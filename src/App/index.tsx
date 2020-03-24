import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import * as S from './styles';

import tagActions from 'src/redux/tag/actions';
import questionActions from 'src/redux/question/actions';

function App() {
  const dispatch = useDispatch();
  const [selectedTag, setSelectedTag] = useState<string>('');
  const tags = useSelector((state: any) => state.tag.data);
  const questions = useSelector((state: any) => state.question.data);

  useEffect(() => {
    dispatch(tagActions.fetchTag());
  }, [dispatch]);

  useEffect(() => {
    if (tags[0]) {
      setSelectedTag(tags[0].name);
    }

  }, [tags]);

  useEffect(() => {
    if (!selectedTag) {
      return;
    }

    dispatch(questionActions.fetchQuestion(selectedTag));
  }, [dispatch, selectedTag]);

  const handleQuestionClick = (link: string) => {
    window.open(link, '_blank');
  }

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
              <S.Tag
                key={tag.name}
                className={
                  classNames({ 'active': selectedTag === tag.name })
                }
              >{ tag.name }</S.Tag>
            )
          }
        </S.TagContainer>
      </div>
      <div className="question-container">
        {
          questions.map((question: any) => (
            <S.Question
              onClick={() => handleQuestionClick(question.link)}
            >
              <div className="content">
                <h4>{ question.title }</h4>
                <div className="meta">
                  <div className="content score">
                    <div className="label">Score</div>
                    <div
                      className={classNames('value', {
                        highlight: question.score < 0,
                      })}
                    >
                      { question.score }
                    </div>
                  </div>
                  <div className="content answers">
                    <div className="label">Answers</div>
                    <div
                      className={classNames('value', {
                        highlight: question.answer_count > 0,
                        'is-answered': question.is_answered,
                      })}
                    >{ question.answer_count }</div>
                  </div>
                  <div className="content viewed">
                    <div className="label">Viewed</div>
                    <div className="value">{ question.view_count }</div>
                  </div>
                </div>
              </div>
              <div className="avatar">
                <div className="image">
                  <img src={ question.owner.profile_image } alt={`${question.owner.display_name}'s avatar`} />
                </div>
                <div className="name">{ question.owner.display_name }</div>
              </div>
            </S.Question>
          ))
        }
      </div>
    </S.App>
  );
}

export default App;
