import React from 'react';
import classNames from 'classnames';

import * as S from './styles';

interface IProps {
  question: any;
}

function Question({ question }: IProps) {
  const handleQuestionClick = (link: string) => {
    window.open(link, '_blank');
  }

  return (
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
  )
}

export default Question;
