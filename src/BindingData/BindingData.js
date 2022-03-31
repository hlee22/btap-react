import React, { Component } from "react";
import style from "./Bindingdata.module.css" ; 
//External Css

//Import ở bất kỳ component nào cũng dùng chung cho toàn ứng dụng 

import './BindingData.css' ;

export default class BindingData extends Component {
  // BindingDta: đưa các giá trị của biến hiển thị lên UI

  // Ngoài render
  //thuộc tính của class
  tenSV = "nguyen thi sinh vien ";
  tuoiSV = 20;
  addressSV = "121 tan mninh street";

  pets = [
    {
      id: 1,
      name: "nam ",
      img: "https://picsum.photos/id/237/200/300",
      price: 3000,
    },
    {
      id: 2,
      name: "nữ ",
      img: "https://picsum.photos/id/237/200/300",
      price: 3232,
    },
  ];

  render() {
    //trong render
    // biến của hàm

    let age = 20;
    //css inline 
    // nhiều thuộc tính css  
    let styleImg = {
      width : "100%" ,  
      height :  "500" , 
      border : "3px solid red ", 
      borderRadius : " 15px"
    };

    return (
      <div className="container">
        BindingData
        {/* {}: bindingdata lên UI  */}
        <p className="alert alert-danger">
          tên sv : <span>{this.tenSV}</span>{" "}
        </p>
        <p className="alert alert-success">
          {" "}
          tuổi sv : <span>{this.tuoiSV}</span>{" "}
        </p>
        <p className="alert alert-info">
          địa chỉ sv : <span>{this.addressSV}</span>{" "}
        </p>
        <div className="row">
          <div className="col-4">
            <div className="card" >
              <img src={ this.pets[0].img } className="card-img-top" alt="# " />
              <div className="card-body">
                <h5 className="card-title"> {this.pets[0].name}</h5>
                <p className="card-text"> {this.pets[0].price}
                </p>
               
              </div>
            </div>
          </div>
          <div className="col-4">
          <div className="card reactCard " >
              <img style={styleImg} src={ this.pets[1].img } className="card-img-top" alt="# " />
              <div className="card-body">
                <h5 style={{color : "green"}} className="card-title"> {this.pets[1].name}</h5>
                <p className={`${style.colorPrice}`} > {this.pets[1].price}
                </p>
               
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
