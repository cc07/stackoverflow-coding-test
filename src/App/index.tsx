import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'debounce';

import questionActions from 'src/redux/question/actions';

import Header from './components/Header';
import Question from './components/Question';
import Loader from './components/Loader';

import * as S from './styles';

function App() {
  const dispatch = useDispatch();
  const [selectedTag, setSelectedTag] = useState<string>('');
  const tagSelector = useSelector((state: any) => state.tag);
  const {
    data: tags,
    isLoading: isTagLoading,
  } = tagSelector;
  const questionSelector = useSelector((state: any) => state.question);
  const {
    data: questions,
    isLoading: isQuestionLoading,
    page,
    hasMore,
  } = questionSelector;

  const onScrollListener = () => {
    const container = document.querySelector('html');

    if (container && hasMore) {
      const {
        scrollHeight,
        scrollTop,
        clientHeight,
      } = container;

      if (scrollTop > scrollHeight - clientHeight - 300) {
        dispatch(questionActions.fetchMore(selectedTag, page + 1));
      }
    }
  }

  const debouncedOnScrollListener = debounce(onScrollListener, 300);

  useEffect(() => {
    window.addEventListener('scroll', debouncedOnScrollListener);

    return () => {
      window.removeEventListener('scroll', debouncedOnScrollListener);
    }
  }, [debouncedOnScrollListener, hasMore]);

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

  return (
    <S.App>
      <Header
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
      <S.QuestionContainer>
        {
          questions.map((question: any) => (
            <Question
              key={question.title}
              question={question}
            />
          ))
        }
        {
          (isTagLoading || isQuestionLoading) && (
            <Loader />
          )
        }
      </S.QuestionContainer>
    </S.App>
  );
}

export default App;
