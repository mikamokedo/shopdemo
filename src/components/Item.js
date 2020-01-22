import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
class Item extends Component {

    ChangeToSlug = (title) => {
        let slug = title.toLowerCase();
    
    
        slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
        slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
        slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
        slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
        slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
        slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
        slug = slug.replace(/đ/gi, 'd');
        slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
        slug = slug.replace(/ /gi, "-");
        slug = slug.replace(/\-\-\-\-\-/gi, '-');
        slug = slug.replace(/\-\-\-\-/gi, '-');
        slug = slug.replace(/\-\-\-/gi, '-');
        slug = slug.replace(/\-\-/gi, '-');
        slug = '@' + slug + '@';
        slug = slug.replace(/\@\-|\-\@|\@/gi, '');
    
        return (slug)
    }





    render() {
        return (
            <div className="owl-item"><div className="col-md-4">
            <div className="single-product">
              <div className="single-product-img">
                <a href="hihi">
                  <img className="primary-img" src={this.props.item.image} alt="product" />
                  <img className="secondary-img" src="img/product/single-product-1.jpg" alt="product" />
                </a>
                <div className="single-product-action">
                  <Link to={`/${this.props.item.cate}/${this.ChangeToSlug(this.props.item.name)}.${this.props.item.id}.html`}><i className="fa fa-external-link" /></Link>
                  <a href="hihi"><i className="fa fa-shopping-cart" /></a>
                </div>
              </div>
              <div className="single-product-content">
                <div className="product-content-left">
                  <h2>
                      <a href="hihi">{this.props.item.name}</a>
                    
                  </h2>
        <p>{this.props.item.cate}</p>
                </div>
                <div className="product-content-right">
                  <h3>${this.props.item.price}</h3>
                </div>
              </div>
            </div>
          </div></div>
        );
    }
}

export default Item;