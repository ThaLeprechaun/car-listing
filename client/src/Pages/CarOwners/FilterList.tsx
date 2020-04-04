import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import Card from '../../Components/Card/Card';

import './filterList.css';

const initialState = {
  carOwner: [
    {
      id: 0,
      first_name: '',
      last_name: '',
      email: '',
      country: '',
      car_model: '',
      car_model_year: 0,
      car_color: '',
      gender: '',
      job_title: '',
      bio: '',
    },
  ],
};

export default function FirstFilter() {
  const history = useHistory();
  const path = history.location.pathname;
  const [car, setCar] = useState(initialState);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = car.carOwner.slice(indexOfFirstData, indexOfLastData);
  const paginate = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    (async function() {
      const res = await axios.get(
        `http://localhost:3005/api/v1/car-owners${path}`,
      );
      setCar(res.data);
    })();
  }, [history, path]);

  if (car.carOwner.length === 0) {
    return (
      <>
        <div className="no-data">
          Sorry, there are no car details to display
        </div>
        <div className="back-link">
          <Link to="/">Click to go back</Link>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="shows">
        <div className="back-link">
          <Link to="/" className="home">
            Home
          </Link>
        </div>
        <div>
          Showing {indexOfFirstData + 1} to {indexOfLastData} of{' '}
          {car.carOwner.length} cars
        </div>
      </div>
      {currentData.map((item, index) => (
        <Card cardClass="card-list" key={index}>
          <div className="list-container">
            <div className="list-container__image">
              <Card>
                <img src="./asset/jeep.jpg" alt="car" />
              </Card>
            </div>

            <div className="list-container__content">
              <div className="username">
                {item.first_name} {item.last_name}
              </div>

              <div className="category">
                <div className="category__item">
                  <label className="item-brand">Brand</label>
                  <br />
                  <div className="list-brand-style">{item.car_model}</div>
                </div>
                <div className="category__item">
                  <label className="item-year">Year</label>
                  <br />
                  <div className="list-year-style">{item.car_model_year}</div>
                </div>
                <div className="category__item--color">
                  <label className="item-color">Color</label>
                  <br />
                  <div
                    style={{
                      backgroundColor: item.car_color,
                      padding: 10,
                      borderRadius: 50,
                    }}
                    className="list-circle-style"
                  ></div>
                </div>
              </div>

              <div className="category">
                <div className="description__item">
                  <label className="item-brand">Country</label>
                  <br />
                  <div className="item-brand--name">{item.country}</div>
                </div>
                <div className="description__item">
                  <label className="item-brand">Gender</label>
                  <br />
                  <div className="item-brand--name">{item.gender}</div>
                </div>
                <div className="description__item">
                  <label className="item-brand">Job</label>
                  <br />
                  <div className="item-brand--name">{item.job_title}</div>
                </div>
              </div>

              <div className="personal">
                <div>
                  <label className="item-brand">Email: </label>
                  <span className="item-brand--name">{item.email}</span>
                </div>
                <div>
                  <label className="item-brand">Bio: </label>
                  <span className="item-brand--name">{item.bio}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
      <div className="pagination__container">
        <Pagination
          hideFirstLastPages
          activePage={currentPage}
          itemsCountPerPage={dataPerPage}
          pageRangeDisplayed={10}
          prevPageText="Previous"
          nextPageText="Next"
          itemClass="page-item"
          linkClass="page-link"
          totalItemsCount={car.carOwner.length}
          onChange={paginate}
        />
      </div>
    </>
  );
}
