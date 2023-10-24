/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useRef } from 'react';
import { Data, ModalProps, emptyData } from '../common/interfaces';

const EditField = ({ visible = false, content = emptyData, edit = '', onClose }: ModalProps) => {
  if (!visible) return null;

  const val = useRef<HTMLInputElement>(null);

  function findEdit(s: string) {
    let res = '';
    if (s === 'name') res = content.name;
    if (s === 'email') res = content.email;
    if (s === 'birth') res = content.birthday_date;
    if (s === 'phone') res = content.phone_number;
    if (s === 'adress') res = content.adress;
    return res;
  }

  // function close() {
  //   onClose;
  // }

  function handleClick() {
    const newData: Data = content;
    if (edit === 'name') newData.name = val.current?.value as string;
    if (edit === 'email') newData.email = val.current?.value as string;
    if (edit === 'birth') newData.birthday_date = val.current?.value as string;
    if (edit === 'phone') newData.phone_number = val.current?.value as string;
    if (edit === 'adress') newData.adress = val.current?.value as string;
    console.log(newData);
    onClose();
  }

  return (
    <div className="wrapper">
      <div className="field">
        <input className="inputEdit" defaultValue={findEdit(edit)} ref={val} contentEditable />
        <div className="buttonBlock">
          <button className="buttonEdit" onClick={handleClick}>
            EDIT
          </button>
          <button className="buttonCancel" onClick={onClose}>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditField;
