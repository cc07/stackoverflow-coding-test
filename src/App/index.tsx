import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import Loader from 'react-loader-spinner'
import { debounce } from 'debounce';

import questionActions from 'src/redux/question/actions';

import Header from './components/Header';
import * as S from './styles';

function App() {
  const dispatch = useDispatch();
  const [selectedTag, setSelectedTag] = useState<string>('');
  const tags = useSelector((state: any) => state.tag.data);
  const questions = useSelector((state: any) => state.question.data);
  const isQuestionLoading = useSelector((state: any) => state.question.isLoading);

  const onScrollListener = (event: any) => {
    const container = document.querySelector('html');

    if (container) {
      const {
        scrollHeight,
        scrollTop,
        clientHeight,
      } = container;

      if (scrollTop > scrollHeight - clientHeight - 300) {
        console.log('fetch more');
      }
    }
  }

  const debouncedOnScrollListener = debounce(onScrollListener, 300);

  useEffect(() => {
    window.addEventListener('scroll', debouncedOnScrollListener);

    return () => {
      window.removeEventListener('scroll', debouncedOnScrollListener);
    }
  }, []);

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
      <Header
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
      <S.QuestionContainer>
        {
          questions.map((question: any) => (
            <S.Question
              key={question.title}
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
        {
          isQuestionLoading && (
            <div className="loading-container">
              <Loader
                type="Bars"
                color="#333"
              />
            </div>
          )
        }
      </S.QuestionContainer>
    </S.App>
  );
}

export default App;
