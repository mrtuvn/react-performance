import React from "react";

const PopularProduct = () => {
  return (
    <div className="popular__product">
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-8">
          <div className="section-title">
            <h4>Popular Shows</h4>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4">
          <div className="btn__all">
            <a href="#" className="primary-btn">
              View All <span className="arrow_right" />
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="product__item">
            <div
              className="product__item__pic set-bg"
              data-setbg="assets/img/popular/popular-1.jpg"
            >
              <div className="ep">18 / 18</div>
              <div className="comment">
                <i className="fa fa-comments" /> 11
              </div>
              <div className="view">
                <i className="fa fa-eye" /> 9141
              </div>
            </div>
            <div className="product__item__text">
              <ul>
                <li>Active</li>
                <li>Movie</li>
              </ul>
              <h5>
                <a href="#">Sen to Chihiro no Kamikakushi</a>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="product__item">
            <div
              className="product__item__pic set-bg"
              data-setbg="assets/img/popular/popular-2.jpg"
            >
              <div className="ep">18 / 18</div>
              <div className="comment">
                <i className="fa fa-comments" /> 11
              </div>
              <div className="view">
                <i className="fa fa-eye" /> 9141
              </div>
            </div>
            <div className="product__item__text">
              <ul>
                <li>Active</li>
                <li>Movie</li>
              </ul>
              <h5>
                <a href="#">Kizumonogatari III: Reiket su-hen</a>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="product__item">
            <div
              className="product__item__pic set-bg"
              data-setbg="assets/img/popular/popular-3.jpg"
            >
              <div className="ep">18 / 18</div>
              <div className="comment">
                <i className="fa fa-comments" /> 11
              </div>
              <div className="view">
                <i className="fa fa-eye" /> 9141
              </div>
            </div>
            <div className="product__item__text">
              <ul>
                <li>Active</li>
                <li>Movie</li>
              </ul>
              <h5>
                <a href="#">Shirogane Tamashii hen Kouhan sen</a>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="product__item">
            <div
              className="product__item__pic set-bg"
              data-setbg="assets/img/popular/popular-4.jpg"
            >
              <div className="ep">18 / 18</div>
              <div className="comment">
                <i className="fa fa-comments" /> 11
              </div>
              <div className="view">
                <i className="fa fa-eye" /> 9141
              </div>
            </div>
            <div className="product__item__text">
              <ul>
                <li>Active</li>
                <li>Movie</li>
              </ul>
              <h5>
                <a href="#">Rurouni Kenshin: Meiji Kenkaku Romantan</a>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="product__item">
            <div
              className="product__item__pic set-bg"
              data-setbg="assets/img/popular/popular-5.jpg"
            >
              <div className="ep">18 / 18</div>
              <div className="comment">
                <i className="fa fa-comments" /> 11
              </div>
              <div className="view">
                <i className="fa fa-eye" /> 9141
              </div>
            </div>
            <div className="product__item__text">
              <ul>
                <li>Active</li>
                <li>Movie</li>
              </ul>
              <h5>
                <a href="#">Mushishi Zoku Shou 2nd Season</a>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="product__item">
            <div
              className="product__item__pic set-bg"
              data-setbg="assets/img/popular/popular-6.jpg"
            >
              <div className="ep">18 / 18</div>
              <div className="comment">
                <i className="fa fa-comments" /> 11
              </div>
              <div className="view">
                <i className="fa fa-eye" /> 9141
              </div>
            </div>
            <div className="product__item__text">
              <ul>
                <li>Active</li>
                <li>Movie</li>
              </ul>
              <h5>
                <a href="#">Monogatari Series: Second Season</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
