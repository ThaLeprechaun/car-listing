import React from 'react';
import Card from '../../Components/Card/Card';
import FilterMenu from './FilterMenu';
import { Link } from 'react-router-dom';
import './filter.css';

export default function Filter() {
  return (
    <>
      <h1>Filter</h1>
      {FilterMenu.filterType.map((item, index) => (
        <Card cardClass="card-style" key={index}>
          <Link to={item.id.toString()} key={index} className="link-style">
            <div className="card-content">
              <div className="card-content__year">
                {item.start_year}-{item.end_year}
              </div>
              <div className="card-content__gender">{item.gender}</div>
              <div className="card-content__country">
                {item.countries.map((country, index) => (
                  <div key={index} className="card-content__country--item">
                    {country}
                  </div>
                ))}
              </div>
              <div className="card-content__color">
                {item.colors.map((color, index) => (
                  <div
                    key={index}
                    style={{ backgroundColor: color }}
                    className="card-content__color circle-style"
                  ></div>
                ))}
              </div>
            </div>
          </Link>
        </Card>
      ))}
    </>
  );
}
