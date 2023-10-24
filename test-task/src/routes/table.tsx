/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../store/hooks';
import { Data, Resp, emptyData } from '../common/interfaces';
import EditField from '../components/editField';

const defUsers: Data[] = [];

const table = () => {
  const url = useAppSelector((state) => state.url);
  const [arrData, setArrData] = useState<Data[]>(defUsers);
  const [isModal, setModal] = useState(false);
  const [editField, setEditField] = useState('');
  const [itemEdit, setItemEdit] = useState<Data>(emptyData);
  const onClose = () => setModal(false);

  useEffect(() => {
    const apiUrl = `https://technical-task-api.icapgroupgmbh.com/api/table/`;
    fetch(apiUrl)
      .then((res) => res.json() as unknown as Resp)
      .then((repos) => {
        setArrData(repos.results);
      });
  }, [setArrData]);

  function handleClick(item: Data, nameField: string) {
    setItemEdit(item);
    setEditField(nameField);
    setModal(true);
  }

  const content = arrData.map((item) => (
    <div className="user" key={item.id}>
      <div className="id">{item.id}</div>
      <div className="name">
        {item.name}
        <div className="edit" onClick={() => handleClick(item, 'name')} />
      </div>
      <div className="email">
        {item.email}
        <div className="edit" onClick={() => handleClick(item, 'email')} />
      </div>
      <div className="birth">
        {item.birthday_date}
        <div className="edit" onClick={() => handleClick(item, 'birth')} />
      </div>
      <div className="phone">
        {item.phone_number}
        <div className="edit" onClick={() => handleClick(item, 'phone')} />
      </div>
      <div className="adress">
        {item.adress}
        <div className="edit" onClick={() => handleClick(item, 'adress')} />
      </div>
    </div>
  ));

  return (
    <div className="table">
      <p>{url.url}</p>
      {content}
      <EditField visible={isModal} content={itemEdit} onClose={onClose} edit={editField} />
    </div>
  );
};
export default table;
