import React from "react";
import "./Payment.scss";

import { Button, Paper, Switch } from "@mui/material";
import {
  SearchIcon,
  QuestionIcon,
  MessageIcon,
  DownSolidArrowIcon,
  ErrorMessageIcon,
  RupeeIcon,
  FileDownloadIcon,
  HamBurgorIcon,
} from "../../../Assets/Icons/Icons";

import Notify from "../../Atoms/Notification/Notify";
const label = { inputProps: { "aria-label": "Switch demo" } };
const paymnet_providers = [
  {
    title: "Razorpay",
    img: "https://d6xcmfyh68wv8.cloudfront.net/newsroom-content/uploads/2022/07/Razorpay_payments.png",
  },
  {
    title: "Cashfree Payments",
    img: "https://images.livemint.com/img/2022/06/06/1600x900/Cashfree_logo_1638256487964_1654503296594.png",
  },
  {
    title: "Phone Pay",
    img: "https://i.pinimg.com/736x/2a/cf/b6/2acfb6fb41f7fcb82c3230afdecff714.jpg",
  },
  {
    title: "Paytm",
    img: "https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.jpg",
  },
];

function Payment() {
  return (
    <div className='payment_main_container'>
      <div className='top_container'>
        <div className='content_div'>
          <h2>Payments</h2>
          <p>{QuestionIcon} how it works</p>
        </div>
        <div className='input_div'>
          {SearchIcon}
          <input
            type='text'
            className='search__input'
            placeholder='Search features ,tutorial etc.'
          />
        </div>
        <div className='notification_container'>
          <p>{ErrorMessageIcon} Need help ?</p>
          <h2>|</h2>
          <Notify icon={FileDownloadIcon} />
          <Notify icon={HamBurgorIcon} />
        </div>
      </div>
      <Paper elevation={1} className='bottom_container'>
        <div className='content_div'>
          <h2>Payment Providers</h2>
          <p>Set up payment provider to accept payments from your customer</p>
        </div>
        {paymnet_providers.map((data, index) => {
          return (
            <div key={index} className='provider_container'>
              <div className='provider_name'>
                <Paper className='provider_logo'>
                  <img alt={data.title} src={data.img} />
                </Paper>
                <div className='content_div'>
                  <h2>{data.title}</h2>
                </div>
              </div>
              <Button variant='outlined'>Set Up</Button>
            </div>
          );
        })}{" "}
        <div className='provider_container'>
          <div className='provider_name'>
            <Paper className='provider_logo'>
              <img
                alt='Cash on delivery'
                src='https://thumbs.dreamstime.com/b/letter-cod-logo-icon-design-vector-monogram-logo-vector-illustration-letter-cod-monogram-logo-icon-design-vector-191696891.jpg'
              />
            </Paper>
            <div className='content_div'>
              {" "}
              <h2>Cash on delivery</h2>
              <p>Receive payments in cash upon delivery.</p>
            </div>
          </div>
          <Switch {...label} />
        </div>
      </Paper>
      <Paper elevation={1} className='manual_container'>
        <div className='content_div'>
          <h2>Manual aymnet methods</h2>
          <p>
            Paymnents that are made outside store.Allows you to accept cash,
            check or other custom forms of payments.
          </p>
        </div>
        <Switch {...label} />
      </Paper>
    </div>
  );
}

export default Payment;
