import React, { useState } from 'react';
import styles from './CreatePostPage.module.css';

export function CreatePostPage() {
    const [textTitle, setTextTitle] = useState('');
    const [textBody, setTextBody] = useState('');
    const [category, setCategory] = useState('');
    const [tags, setTags] = useState('');

    return (
        <>
            <div className={styles.container}>
                <div className={styles.pageTitle}>Criar um novo post</div>

                <label htmlFor="textTitle" className={styles.topicTitle}>Título do Tópico</label>
                <input
                    type="text"
                    id="textTitle"
                    value={textTitle}
                    onChange={(e) => setTextTitle(e.target.value)}
                    className={styles.input}
                    placeholder="Insira o Título"
                />



                <label htmlFor="textBody" className={styles.topicTitle}>Corpo do Tópico</label>
                <textarea
                    id="textBody"
                    value={textBody}
                    onChange={(e) => setTextBody(e.target.value)}
                    className={styles.textarea}
                    placeholder="Corpo do Tópico"
                ></textarea>

                <label htmlFor="category" className={styles.topicTitle}>Categoria</label>
                <label htmlFor="tags" className={styles.topicTitle}>Tags</label>
                
                <div className={styles.category}>
                    <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Selecione uma categoria</option>
                        <option value="category1">Categoria 1</option>
                        <option value="category2">Categoria 2</option>
                        <option value="category3">Categoria 3</option>
                    </select>
                </div>


                <input
                    type="text"
                    id="tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className={styles.tags}
                    placeholder="Tags (separadas por vírgula)"
                />
                <button className={styles.createButton}>Criar Post</button>
            </div>
            
        </>
    );
}
