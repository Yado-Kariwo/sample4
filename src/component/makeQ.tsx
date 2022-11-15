import React from "react";
import { useState } from "react";
import Vocabulary from "../json/Vocabulary.json"; // 単語帳
import shuffleArray from "./ShuffleArray";
import UseNmb from "./UseNmb";// カウンター、問題を次に進める
// 単語帳の読み込み
const vocabulary = Vocabulary.wards_list;
// ランダムな出題順番の生成
const question_order = shuffleArray(vocabulary.length);

const makeQ: React.VFC = () => {
    const len = vocabulary.length

    const output = () => {
        const { nmb, increment, decrement } = UseNmb(len);
        return (
            <div>
                <p>
                    ランダム 
                </p>
                {vocabulary[question_order[nmb]].Wards}
                <p>
                    元の順番
                </p>
                {vocabulary[nmb].Wards}
                <h3>Number: {nmb}</h3>
                <button onClick={()=>decrement()}>-</button>
                <button onClick={()=>increment()}>+</button>
                <p>
                {question_order}
                </p>
                
            </div>
        )
    };
    return (
        <div>
            {output()}
        </div>
    )
}

export default makeQ;