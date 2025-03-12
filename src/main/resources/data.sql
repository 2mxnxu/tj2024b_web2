-- ---------------------- day05 ---------------------------------- --
-- 학생 테이블 샘플 데이터 삽입
INSERT INTO student (name, kor, math) VALUES ('김철수', 90, 85);
INSERT INTO student (name, kor, math) VALUES ('이영희', 78, 92);
INSERT INTO student (name, kor, math) VALUES ('박민수', 88, 76);

-- 성적 테이블 샘플 데이터 삽입 (트랜잭션 실습을 위해 일부 데이터만 추가)
INSERT INTO student_score (sno, subject, score) VALUES (1, '국어', 90);
INSERT INTO student_score (sno, subject, score) VALUES (1, '수학', 85);
INSERT INTO student_score (sno, subject, score) VALUES (2, '국어', 78);
INSERT INTO student_score (sno, subject, score) VALUES (2, '수학', 92);

-- ---------------------- ------ ---------------------------------- --
insert into productsample( name , price , comment ) values ( '코카콜라' , 1000 , '맛있는 코카콜라' );
insert into productsample( name , price , comment ) values ( '사이다' , 1700 , '제로 사이다입니다.' );
insert into productsample( name , price , comment ) values ( '환타' , 2000 , '새로나온 환타 맛 입니다.' );

-------------------------------------------------------------------------------------
insert into book (bname, bauthor, bintro, bpwd) values
('위대한 개츠비', 'F. 스콧 피츠제럴드', '미국의 꿈에 대한 소설.', '비밀번호1'),
('앵무새 죽이기', '하퍼 리', '미국 남부의 인종 차별에 관한 이야기.', '비밀번호2'),
('1984', '조지 오웰', '전체주의 사회에 대한 디스토피아 소설.', '비밀번호3'),
('모비 딕', '허먼 멜빌', '집착과 바다에 대한 이야기.', '비밀번호4'),
('오만과 편견', '제인 오스틴', '사랑과 사회적 기대에 관한 이야기.', '비밀번호5');

insert into review (bno, rcontent, rpwd) values
(1, '이 책은 인간의 욕망과 꿈을 그린 명작입니다.', '리뷰비밀번호1'),
(1, '위대한 개츠비의 비극적인 결말이 인상 깊었습니다.', '리뷰비밀번호2'),
(2, '인종 차별의 문제를 매우 감동적으로 그린 작품입니다.', '리뷰비밀번호3');