import './App.css'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from '../src/components/Header/HeaderComponent/Header';

import { PostsListPage } from '../src/pages/PostsListPage';
import { HomePage } from '../src/pages/HomePage';
import { CreatePostPage } from './pages/CreatePostPageComponent/CreatePostPage';
import { RankPage } from './pages/RankPage';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/categories' element={<HomePage />} />
        <Route path='/trends' element={<PostsListPage />} />
        <Route path='/create-post' element={<CreatePostPage />} />
        <Route path='/rank' element={<RankPage />} />
      </Routes>
    </BrowserRouter>
  );
};

