import React, { Component } from 'react'
import ContentCoponent from './ContentCoponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import NavComponent from './NavComponent'

export default class HomeComponent extends Component {
    //  render giúp trả về thành phần UI của component => để hiển thị trên HTML 
    //div : đối tượn JSX (đối tượn UI) do reactjs định nghĩa
    // className : thuộc tính của tối tượng JSX 
    //=> div là object => return chỉ trả về 1 biến 
    // => chỉ được có 1 thẻ bao bên ngoài trong lệnh return 



  render() {
    return (
        //không được return 2 thẻ cùng cấp 
      <div className='container home'>
          HomeComponent

          <div className="row">
                <div className="col-12">
                    <HeaderComponent/> 

                </div>
                <div className="col-4">
                    <NavComponent/> 

                </div>
                <div className="col-8">
                    <ContentCoponent/> 

                </div>
                <div className="col-12">
                     <FooterComponent/> 
                </div>
          </div>
         

      </div>
    )
  }
}
