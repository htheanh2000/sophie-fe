"use client";
import React from "react";

type Question = {
  question: string;
  a: string;
  b: string;
  c: string;
  d: string;
};

interface IIprops {
  questionList: Question[];
}

const QuestionList = ({ questionList }: IIprops) => {
  return (
    <div className="w-full max-w-lg h-full max-h-[750px] overflow-auto scrollbar-hide">
      {questionList.map((question, index) => (
        <div className="mt-8  cursor-pointer hover:shadow-md  p-2 ">
          <p>
            <span className="text-blue-400">Câu: {index + 1}</span> {question.question}
          </p>
          <p>
            <span className="text-blue-400 ml-8">A.</span> {question.a}
          </p>
          <p>
            <span className="text-blue-400 ml-8">B.</span> {question.b}
          </p>
          <p>
            <span className="text-blue-400 ml-8">C.</span> {question.c}
          </p>
          <p>
            <span className="text-blue-400 ml-8">D.</span> {question.d}
          </p>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
