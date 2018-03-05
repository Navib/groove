import React from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery';

export default (props) => {
  return (
    <div
      className="swiper-slide similar-slide"
      data-toggle="tooltip"
      data-trigger="hover"
      data-html="true"
      data-delay="300"
      data-placement="top"
      title={`<h6>${props.title}</h6><p class="score"><span>User Score: ${props.rating}</span><span>${props.releaseDate}</span><span>Language: ${props.language}</span></p><p>${props.overview}</p>`}
      >
      <Link to={`/movie/${props.movieId}`}>
        <img src={props.poster} />
        <p>{props.title}</p>
      </Link>
    </div>
  )
}
