import { useState, useEffect } from "react";
import axios from "axios";

const Friends = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [listOfFriends, setListOfFriends] = useState([]);

  const addFriend = () => {
    axios
      .post("http://localhost:3001/addfriend", {
        name: name,
        age: age,
      })
      .then((response) => {
        setListOfFriends([
          ...listOfFriends,
          { _id: response.data._id, name, age },
        ]);
      })
      .catch((error) => {
        alert("Не удалось добавить друга");
        console.log(error.message);
      });
  };

  const updateFriend = (id) => {
    const newAge = prompt("Введите новый возраст");

    axios
      .put("http://localhost:3001/update", {
        newAge: newAge,
        id: id,
      })
      .then(() => {
        setListOfFriends(
          listOfFriends.map((val) => {
            return val._id === id
              ? { _id: id, name: val.name, age: newAge }
              : val;
          })
        );
      });
  };

  const deleteFriend = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
      setListOfFriends(
        listOfFriends.filter((val) => {
          return val._id !== id;
        })
      );
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/read")
      .then((res) => {
        setListOfFriends(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="friends-main">
      <div className="friends-main__left friends-form">
        <div className="friends-form__title">Добавить друга</div>
        <div className="friends-form__fields">
          <input
            type="text"
            className="friends-form__input"
            placeholder="Введите имя"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            className="friends-form__input"
            placeholder="Введите возраст"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button className="friends-form__btn" onClick={addFriend}>
          Добавить
        </button>
      </div>
      <div className="friends-main__right friends-table">
        {listOfFriends.length === 0 || listOfFriends === undefined ? (
          <div className="friends-table__not-body">
            <div>
              Пока друзья не были добавлены. <br />
              Добавьте друзей!
            </div>
          </div>
        ) : (
          <>
            <div className="friends-table__head">
              <div>Имя</div>
              <div>Возраст</div>
              <div>Действие</div>
            </div>
            <div className="friends-table__body">
              {listOfFriends.map((val, _id) => {
                return (
                  <div className="friends-table__item" key={_id}>
                    <div className="friends-name">{val.name}</div>
                    <div className="friends-age">{val.age}</div>
                    <div className="friends-action">
                      <div
                        className="friends-action__btn"
                        onClick={() => updateFriend(val._id)}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 12.8538V15.5556C0 15.8045 0.195529 16 0.444384 16H3.14624C3.26178 16 3.37732 15.9556 3.45731 15.8667L13.1627 6.17022L9.82978 2.83734L0.133315 12.5338C0.0444385 12.6227 0 12.7293 0 12.8538ZM15.7401 3.5928C15.8225 3.51057 15.8878 3.41291 15.9324 3.30539C15.977 3.19787 16 3.08261 16 2.96621C16 2.84981 15.977 2.73456 15.9324 2.62704C15.8878 2.51952 15.8225 2.42186 15.7401 2.33963L13.6604 0.259915C13.5781 0.177523 13.4805 0.112156 13.373 0.0675565C13.2654 0.0229569 13.1502 0 13.0338 0C12.9174 0 12.8021 0.0229569 12.6946 0.0675565C12.5871 0.112156 12.4894 0.177523 12.4072 0.259915L10.7808 1.88636L14.1136 5.21924L15.7401 3.5928Z"
                            fill="#2E3058"
                            fillOpacity="0.5"
                          />
                        </svg>
                      </div>
                      <div
                        className="friends-action__btn"
                        onClick={() => deleteFriend(val._id)}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.99586 8L15.5824 2.41348C15.8475 2.14881 15.9967 1.78966 15.997 1.41503C15.9973 1.0404 15.8488 0.680986 15.5841 0.415851C15.3195 0.150716 14.9603 0.00157854 14.5857 0.0012477C14.2111 0.000916852 13.8517 0.14942 13.5865 0.414087L8 6.00061L2.41348 0.414087C2.14834 0.148952 1.78874 0 1.41378 0C1.03882 0 0.679222 0.148952 0.414087 0.414087C0.148952 0.679222 0 1.03882 0 1.41378C0 1.78874 0.148952 2.14834 0.414087 2.41348L6.00061 8L0.414087 13.5865C0.148952 13.8517 0 14.2113 0 14.5862C0 14.9612 0.148952 15.3208 0.414087 15.5859C0.679222 15.851 1.03882 16 1.41378 16C1.78874 16 2.14834 15.851 2.41348 15.5859L8 9.99939L13.5865 15.5859C13.8517 15.851 14.2113 16 14.5862 16C14.9612 16 15.3208 15.851 15.5859 15.5859C15.851 15.3208 16 14.9612 16 14.5862C16 14.2113 15.851 13.8517 15.5859 13.5865L9.99586 8Z"
                            fill="#2E3058"
                            fillOpacity="0.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Friends;
