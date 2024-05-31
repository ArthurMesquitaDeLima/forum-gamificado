import React, { useState } from 'react';
import { FaUser, FaBell } from 'react-icons/fa';
import styles from './UserNavigation.module.css';

export function UserNavigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileDetails, setShowProfileDetails] = useState(false);

  const toggleProfileDetails = () => {
    setShowProfileDetails(!showProfileDetails);
  };

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn ? (
        <>
        <div className={styles.icon}>
            <FaBell />
          </div>
          <div className={styles.navItemsContainer}>
            <div className={styles.profileIcon} onClick={toggleProfileDetails}>
              <div className={styles.containerOutside}>
                <div className={styles.avatarIcon}>
                  <FaUser />
                </div>
                <span className={styles.username}>Nome do Usuário</span>
              </div>
              {showProfileDetails && (
                <>
                  <div className={styles.profileDetails}>
                    <div className={styles.container}>
                      <div className={styles.avatarIcon}>
                        <FaUser />
                      </div>
                      <span className={styles.username}>Nome do Usuário</span>
                      <span className={styles.meritTitle}>Novo Membro</span>
                      <div className={styles.messageNum}>
                        <span>Mensagens:</span>
                        <span>0</span>
                      </div>
                      <div className={styles.messageNum}>
                        <span>Pontos Acumulados:</span>
                        <span>0</span>
                      </div>
                    </div>
                    <div className={styles.container}>
                      <span>Novo Post</span>
                      <span>Pontos recebidos</span>
                      <span>Seus Conteúdos</span>
                    </div>
                    <div className={styles.container}>
                      <span>Detalhes da conta</span>
                      <span>Contas conectadas</span>
                      <span>Senha e segurança</span>
                      <span>Seguidores</span>
                      <span>Privacidade</span>
                      <span>Ignorando</span>
                      <span>Preferencias</span>
                    </div>
                    <div className={styles.container}>
                      <span onClick={logout}>Sair</span>
                    </div>
                  </div>
                  <div className={styles.triangle} />
                </>
              )}
            </div>
          </div>
          
        </>
      ) : (
        <>
          <button className={styles.button} onClick={login}>Logar</button>
          <button className={styles.button}>Registrar</button>
        </>
      )}
    </>
  );
};

export default UserNavigation;
