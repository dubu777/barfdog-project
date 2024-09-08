'use client'
import React, { useState } from 'react';
import * as styles from './ReceiverInfo.css';
import CheckIcon from '/public/checkedBox.svg';
import NoneCheckIcon from '/public/noneCheckedBox.svg';

const ReceiverInfo = () => {
  const [isSameAsOrderer, setIsSameAsOrderer] = useState(true);
  const [receiverInfo, setReceiverInfo] = useState({
    name: '원재현',
    phone: '01054541976',
    zipcode: '27353',
    street: '충북 충주시 연수동산로 26',
    detailAddress: '111동 1304호',
    request: '',
  });

  const handleCheckboxChange = () => {
    setIsSameAsOrderer(!isSameAsOrderer);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setReceiverInfo({ ...receiverInfo, [id]: value });
  };

  return (
    <section className={styles.receiverInfoSection}>
      <div className={styles.receiverInfoTitle}>받는 사람 정보</div>
      
      <div className={styles.checkboxWrap}>
        <label htmlFor="sameUserInfo" className={styles.checkboxLabel}>
        <input
          type="checkbox"
          id="sameUserInfo"
          checked={isSameAsOrderer}
          onChange={handleCheckboxChange}
          className={styles.checkboxInput}
        />
        { isSameAsOrderer ? <CheckIcon/> : <NoneCheckIcon/>}
          주문자 정보와 같습니다.
        </label>
      </div>
      <div className={styles.gridBox}>
        <p className={styles.gridBoxText}>받는 분</p>
        <div>
          <input
            type="text"
            id="name"
            className={styles.inputBox}
            placeholder="이름"
            value={receiverInfo.name}
            onChange={handleInputChange}
          />
        </div>

        <p className={styles.gridBoxText}>연락처</p>
        <div>
          <input
            type="text"
            id="phone"
            className={styles.inputBox}
            placeholder="‘-’ 없이 숫자만 입력"
            value={receiverInfo.phone}
            onChange={handleInputChange}
          />
        </div>

        <p className={styles.gridBoxText}>주소</p>
        <ul className={styles.addressBox}>
          <li className={styles.addressItem}>
            <input
              type="text"
              id="zipcode"
              className={styles.inputBox}
              placeholder="우편번호"
              value={receiverInfo.zipcode}
              disabled
            />
            <button type="button" className={styles.btn}>재검색</button>
          </li>
          <li>
            <input
              type="text"
              id="street"
              className={styles.inputBox}
              placeholder="주소"
              value={receiverInfo.street}
              disabled
            />
          </li>
          <li>
            <input
              type="text"
              id="detailAddress"
              className={styles.inputBox}
              placeholder="상세주소"
              value={receiverInfo.detailAddress}
              onChange={handleInputChange}
            />
          </li>
        </ul>

        <p className={styles.gridBoxText}>배송 요청사항</p>
        <div>
          <input
            type="text"
            id="request"
            className={styles.inputBox}
            placeholder="직접입력"
            value={receiverInfo.request}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </section>
  );
};

export default ReceiverInfo;
