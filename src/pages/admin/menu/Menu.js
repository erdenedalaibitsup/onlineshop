import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { adminProductSubType, adminProductType, adminHome, adminProfile } from '../routes/route'
import Drawer from '../components/Drawer'
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});
const Menu = () => {


  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <NavLink to="/" activeClassName="brand-link" className="brand-link">

        <span className="brand-text font-weight-light"></span>
      </NavLink>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src={process.env.PUBLIC_URL + "/dist/img/namii.jpeg"}
              className="img-circle elevation-2"
              alt="User"
            />
          </div>
          <div className="info">
            <NavLink to={adminProfile} activeClassName="d-block">
              Админ
              </NavLink>
          </div>
        </div>
        <div className="form-inline">
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >

            <li className="nav-item ">
              <NavLink to={adminHome} className="nav-link" activeClassName="nav-link">
                <i className="nav-icon fas fa-folder" />
                <p>Бүтээгдэхүүн</p>
              </NavLink>
            </li>

            {/* <li className="nav-item ">
                <NavLink to="{adminProductType}" className="nav-link" activeClassName="nav-link">
                  <i className="nav-icon fas fa-folder" />
                  <p>Бүтээгдэхүүний төрөл</p>
                </NavLink>
              </li> */}

            <li className="nav-item ">
              <NavLink to={adminProductSubType} className="nav-link" activeClassName="nav-link">
                <i className="nav-icon fas fa-folder" />
                <p>Бүтээгдэхүүний дэд төрөл</p>
              </NavLink>
            </li>


            {/* <li className="nav-item">
                <NavLink
                  to="/admin/product/type"
                  className="nav-link"
                  activeClassName="nav-link"
                >
                  <i className="nav-icon fas fa-folder" />
                  <p>Бүтээгдэхүүн төрөл</p>
                </NavLink>
              </li>

              <li className="nav-item ">
                <NavLink
                  to="/admin/orders"
                  className="nav-link"
                  activeClassName="nav-link"
                >
                  <i className="nav-icon fas fa-folder" />
                  <p>
                    Захиалгын жагсаалт
                    {  <span className="badge badge-info right">6</span> 
                  </p>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  to="/admin/users"
                  className="nav-link"
                  activeClassName="nav-link"
                >
                  <i className="nav-icon fas fa-folder" />
                  <p>
                    Хэрэглэгчийн жагсаалт
                    {/*  <span className="badge badge-info right">6</span> }
                  </p>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  to="/admin/exchange"
                  className="nav-link"
                  activeClassName="nav-link"
                >
                  <i className="nav-icon fas fa-folder" />
                  <p>Ханш</p>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  to="/admin/banner"
                  className="nav-link"
                  activeClassName="nav-link"
                >
                  <i className="nav-icon fas fa-folder" />
                  <p>Banner</p>
                </NavLink>
              </li>

              <li className="nav-item ">
                <NavLink
                  to="/admin/page2"
                  className="nav-link"
                  activeClassName="nav-link"
                >
                  <i className="nav-icon fas fa-folder" />
                  <p>Page 2 зураг</p>
                </NavLink>
              </li> */}
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
    // <Drawer></Drawer>
  );
}
export default Menu;