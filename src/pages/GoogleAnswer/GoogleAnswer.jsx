import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import s from "./GoogleAnswer.module.scss";
import axios from "axios";

function GoogleAnswer() {
  const [data, setData] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("title");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const apiKey =
        "08055d42b197991a23c1c937accab7c631deffc59e10db04c83327dc104833cc";
      const url = `http://localhost:8010/proxy/search.json?engine=google&q=${title}+Destinations&api_key=${apiKey}`;

      try {
        const response = await axios.get(url);
        setData(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    console.log(data);
    getData();
  }, []);
  return (
    <>
      <Header />
      <div className={s.main}>
        {/* <img src={data?.inline_images?.[0].original} style={{width: "200px", height: "200px"}}/> */}
        <div className={s.shortInformation}>
          <div className={s.innerDiv}>
            <p className={s.title}>Main information</p>
            <p className={s.text}>
              <b>Area</b> is {data?.knowledge_graph?.area}
            </p>
            <p className={s.text}>{data?.knowledge_graph?.description}</p>
          </div>
        </div>

        <div className={s.innerDiv}>
          <p className={s.title}>Events</p>
          <div className={s.grid}>
            <div className={s.eventPosition}>
              <div className={s.imageBlock}>
                <div className={s.event}>
                  <li className={s.eventName}>
                    {data?.knowledge_graph?.events?.[0]?.name}
                  </li>
                  <p>Place: {data?.knowledge_graph?.events?.[0]?.extensions}</p>
                  <p>Date: {data?.knowledge_graph?.events?.[0]?.date}</p>
                  <button className={s.linkButton}>
                    <a href={data?.knowledge_graph?.events?.[0]?.link}>Link</a>
                  </button>
                </div>
              </div>
            </div>
            <div className={s.eventPosition}>
              <div className={s.imageBlockSecond}>
                <div className={s.event}>
                  <li className={s.eventName}>
                    {data?.knowledge_graph?.events?.[1]?.name}
                  </li>
                  <p>Place: {data?.knowledge_graph?.events?.[1]?.extensions}</p>
                  <p>Date: {data?.knowledge_graph?.events?.[1]?.date}</p>
                  <button className={s.linkButton}>
                    <a href={data?.knowledge_graph?.events?.[1]?.link}>Link</a>
                  </button>
                </div>
              </div>
            </div>
            <div className={s.eventPosition}>
              <div className={s.imageBlockThird}>
                <div className={s.event}>
                  <li className={s.eventName}>
                    {data?.knowledge_graph?.events?.[2]?.name}
                  </li>
                  <p>Place: {data?.knowledge_graph?.events?.[2]?.extensions}</p>
                  <p>Date: {data?.knowledge_graph?.events?.[2]?.date}</p>
                  <button className={s.linkButton}>
                    <a href={data?.knowledge_graph?.events?.[2]?.link}>Link</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.innerDiv}>
          <p className={s.title}>Top 5 sights</p>
          <div className={s.gridBlock}>
            <div className={s.sights}>
              <li className={s.sightsName}>
                {data?.top_sights?.sights?.[0]?.title}
              </li>
              <p>{data?.top_sights?.sights?.[0]?.description}</p>
              <p className={s.price}>{data?.top_sights?.sights?.[0]?.price}</p>
              <img src={data?.top_sights?.sights?.[0]?.thumbnail} />
            </div>
            <div className={s.sights}>
              <li className={s.sightsName}>
                {data?.top_sights?.sights?.[1]?.title}
              </li>
              <p>{data?.top_sights?.sights?.[1]?.description}</p>
              <p className={s.price}>{data?.top_sights?.sights?.[1]?.price}</p>
              <img src={data?.top_sights?.sights?.[1]?.thumbnail} />
            </div>
            <div className={s.sights}>
              <li className={s.sightsName}>
                {data?.top_sights?.sights?.[2]?.title}
              </li>
              <p>{data?.top_sights?.sights?.[2]?.description}</p>
              <p className={s.price}>{data?.top_sights?.sights?.[2]?.price}</p>
              <img src={data?.top_sights?.sights?.[2]?.thumbnail} />
            </div>
            <div className={s.sights}>
              <li className={s.sightsName}>
                {data?.top_sights?.sights?.[3]?.title}
              </li>
              <p>{data?.top_sights?.sights?.[3]?.description}</p>
              <p className={s.price}>{data?.top_sights?.sights?.[3]?.price}</p>
              <img src={data?.top_sights?.sights?.[3]?.thumbnail} />
            </div>
            <div className={s.sights}>
              <li className={s.sightsName}>
                {data?.top_sights?.sights?.[4]?.title}
              </li>
              <p>{data?.top_sights?.sights?.[4]?.description}</p>
              <p className={s.price}>{data?.top_sights?.sights?.[4]?.price}</p>
              <img src={data?.top_sights?.sights?.[4]?.thumbnail} />
            </div>
            <div className={s.sights}>
              <li className={s.sightsName}>
                {data?.top_sights?.sights?.[5]?.title}
              </li>
              <p>{data?.top_sights?.sights?.[5]?.description}</p>
              <p className={s.price}>{data?.top_sights?.sights?.[5]?.price}</p>
              <img src={data?.top_sights?.sights?.[5]?.thumbnail} />
            </div>
            <div className={s.sights}>
              <li className={s.sightsName}>
                {data?.top_sights?.sights?.[6]?.title}
              </li>

              <p>{data?.top_sights?.sights?.[6]?.description}</p>
              <p className={s.price}>{data?.top_sights?.sights?.[6]?.price}</p>
              <img src={data?.top_sights?.sights?.[6]?.thumbnail} />
            </div>
            <div className={s.sights}>
              <li className={s.sightsName}>
                {data?.top_sights?.sights?.[7]?.title}
              </li>
              <p>{data?.top_sights?.sights?.[7]?.description}</p>
              <p className={s.price}>{data?.top_sights?.sights?.[7]?.price}</p>
              <img src={data?.top_sights?.sights?.[7]?.thumbnail} />
            </div>
            <div className={s.sights}>
              <li className={s.sightsName}>
                {data?.top_sights?.sights?.[8]?.title}
              </li>
              <p>{data?.top_sights?.sights?.[8]?.description}</p>
              <p className={s.price}>{data?.top_sights?.sights?.[8]?.price}</p>
              <img src={data?.top_sights?.sights?.[8]?.thumbnail} />
            </div>
          </div>
        </div>

        <div className={s.innerDiv}>
          <p className={s.title}>Questions & Answers</p>
          <li className={s.question}>
            {data?.related_questions?.[0]?.question}
          </li>
          <li className={s.answer}>{data?.related_questions?.[0]?.snippet}</li>
          <img
            src={data?.related_questions?.[0]?.thumbnail}
            className={s.imagePosition}
          />
          <li className={s.question}>
            {data?.related_questions?.[3]?.question}
          </li>
          <li className={s.answer}>{data?.related_questions?.[3]?.snippet}</li>
          <img
            src={data?.related_questions?.[2]?.thumbnail}
            className={s.imagePosition}
          />
          <br />
        </div>

        <div className={s.innerDiv}>
          <p className={s.title}>Get Your Guide</p>
          <div className={s.gridBlock}>
            <div className={s.guide}>
              <p className={s.sightsName}>
                {data?.shopping_results?.[0]?.title}
              </p>
              <p> Rating {data?.shopping_results?.[0]?.rating}</p>
              <p className={s.price}>{data?.shopping_results?.[0]?.price}</p>
              <button className={s.linkButtonGuide}>
                <a href={data?.shopping_results?.[0]?.link}>Link</a>
              </button>
            </div>
            <div className={s.guide}>
              <p className={s.sightsName}>
                {data?.shopping_results?.[1]?.title}
              </p>
              <p> Rating {data?.shopping_results?.[1]?.rating}</p>
              <p className={s.price}>{data?.shopping_results?.[1]?.price}</p>
              <button className={s.linkButtonGuide}>
                <a href={data?.shopping_results?.[1]?.link}>Link</a>
              </button>
            </div>
            <div className={s.guide}>
              <p className={s.sightsName}>
                {data?.shopping_results?.[2]?.title}
              </p>
              <p> Rating {data?.shopping_results?.[2]?.rating}</p>
              <p className={s.price}>{data?.shopping_results?.[2]?.price}</p>
              <button className={s.linkButtonGuide}>
                <a href={data?.shopping_results?.[2]?.link}>Link</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default GoogleAnswer;
