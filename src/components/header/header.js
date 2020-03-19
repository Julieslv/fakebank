import React from 'react'
import styled from 'styled-components'
import {ReactComponent as Logo } from './../global/images/logo.svg'
import {ReactComponent as ShapeRight } from './header-shape-right.svg'
import { ReactComponent as ShapeLeft } from './header-shape-left.svg'
import Avatar from './../global/avatar/avatar'

const Header = styled.header`
  color: #ffffff;
  padding: 24px 0;
  background: ${props => props.color};
  position: relative;
  @media(min-width: 768px)  {
    padding-bottom: 57px;
  }
  h1 {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.07em;
  }

  h2 {
    font-size: 16px;
    font-weight: 400;
  }
  h3{
    font-size: 14px;
    font-weight: 400;
    opacity: 0.7;
    margin: 0 0 5px;
  }
  .container{
    position: relative;
    z-index: 100;
    @media(max-width: 767px) {
      min-height: 250px;
    }
    @media(min-width: 768px)  {
      display: flex;
      justify-content: space-between;
    }
  }
  .logo{
    margin: 12px 0;
    position: absolute;
    top: 0;
    left: 24px;
  }
  .scroll{
    @media(max-width: 767px) {
      position: absolute;
      top:0;
      left: 0;
      height: 100%;
      width: 100%;
      transform: translateX(-100%);
      padding: 0 24px;
      &.active {
        transform: translate(0);
      }
    }
  }
  .ellipse{
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 0;
    left: 50%;
    li{
      background-color: #03213D;
      content: '';
      display: inline-block;
      height:7px;
      width: 7px;
      border-radius: 50%;
      margin: 4px;
        &.active{
          background-color: #ffffff;
        }
      }
      @media(min-width: 768px) {
        display: none
      }
    }
  }
   .shape-left, .shape-right {
    position: absolute;
    top: 0;
    z-index: 10;
  }
  .shape-left{
    left:0;
    width: 175px;
    height: 46px;
    @media(min-width: 768px) {
      height: 46px;
      width: 176px;
    }
  }
  .shape-right {
    right:0;
    width: 671px;
    height: 165px;
    @media(max-width: 767px) {
     width: 414px;
     height: auto;
    }
  }
`;

const AccountLabel = styled.div`
  padding-top:70px;
.currency{
  font-size:46px;
  letter-spacing: 0.06em;
  line-height: 1.35;
  i{
    font-size: 28px;
    font-style: normal;
  }
  span {
    font-size : 18px;
  }
}
  @media(min-width: 768px)  {
    flex-basis: 60%;
  }
`;

const AccountDetails = styled.div`
  .details {
    display: flex;
    justify-content: space-between;
  }
  .avatar{
    display: inline-flex;
    float: right;
    margin-bottom: 15px;
    + h2{
      clear: both;
    }
  }
  @media(min-width: 768px)  {
    flex-basis: 40%;
  }
`;

const getInitials = (forenames, surname) => {
  let initials
  if (forenames !== undefined) return initials = forenames.charAt(0) + surname.charAt(0);
}

const formatBalance = (currency, balance, currencyPrecision) =>{
    const currencySymbols = {
    'USD': '$', // US Dollar
    'EUR': '€', // Euro
    'CRC': '₡', // Costa Rican Colón
    'GBP': '£', // British Pound Sterling
    'ILS': '₪', // Israeli New Sheqel
    'INR': '₹', // Indian Rupee
    'JPY': '¥', // Japanese Yen
    'KRW': '₩', // South Korean Won
    'NGN': '₦', // Nigerian Naira
    'PHP': '₱', // Philippine Peso
    'PLN': 'zł', // Polish Zloty
    'PYG': '₲', // Paraguayan Guarani
    'THB': '฿', // Thai Baht
    'UAH': '₴', // Ukrainian Hryvnia
    'VND': '₫', // Vietnamese Dong
    };

    const value = Number.parseFloat(balance /= Math.pow(10, currencyPrecision)).toFixed(currencyPrecision)
    const rawUnit = value.split('.');
    const units = {
      superUnit : rawUnit[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
      subUnit: rawUnit[1],
      currencySymbol: currencySymbols[currency],
    }
    return units

}
export const header =( { info, color }) => {
  const { forenames, surname, 'account-number': acccountNumber, 'sort-code': sortCode, currency, 'currency-precision': currencyPrecision, balance } = info;
  const balanceUnits = formatBalance(currency, balance, currencyPrecision);


  //TODO: add a function to control the slider on small viewports.

  return (
    <Header color={color}>
      <ShapeLeft className="shape-left" />
      <ShapeRight className="shape-right" />
      <div className="container">
          <Logo className="logo" />
        <AccountLabel className="scroll">
          <h1>Individual account</h1>
          <div className="currency">{balanceUnits.currencySymbol}{balanceUnits.superUnit}<i>.</i><span>{balanceUnits.subUnit}</span></div>
        </AccountLabel>

        <AccountDetails className="scroll active">
          <Avatar initials={getInitials(forenames, surname)} position="right" color={color}/>
          <h2>Account details</h2>
          <div className="details">
            <div>
              <h3>Beneficiary</h3>
              <div>{forenames} {surname}</div>
            </div>
            <div>
              <h3>Account number</h3>
              <div>{acccountNumber}</div>
            </div>
            <div>
              <h3>Sort code</h3>
              <div>{sortCode}</div>
            </div>
          </div>
        </AccountDetails>
        <ul className="ellipse" aria-hidden="true">
          <li className="active"></li>
          <li></li>
        </ul>
      </div>
   </Header>
  )
}

export default header

