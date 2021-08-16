--
-- PostgreSQL database dump
--

-- Dumped from database version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    "Name" text NOT NULL
);


--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: course-subjects; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."course-subjects" (
    id integer NOT NULL,
    "coursesId" integer NOT NULL,
    "subjectsId" integer NOT NULL
);


--
-- Name: courses; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.courses (
    id integer NOT NULL,
    "Name" text NOT NULL
);


--
-- Name: courses-subjects_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."courses-subjects_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: courses-subjects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."courses-subjects_id_seq" OWNED BY public."course-subjects".id;


--
-- Name: courses_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.courses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: courses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.courses_id_seq OWNED BY public.courses.id;


--
-- Name: professors; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.professors (
    id integer NOT NULL,
    "Name" text NOT NULL
);


--
-- Name: professorsSubjects; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."professorsSubjects" (
    id integer NOT NULL,
    "professorsId" integer NOT NULL,
    "subjectsId" integer NOT NULL
);


--
-- Name: professors-subjects_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."professors-subjects_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: professors-subjects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."professors-subjects_id_seq" OWNED BY public."professorsSubjects".id;


--
-- Name: professors_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.professors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: professors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.professors_id_seq OWNED BY public.professors.id;


--
-- Name: subjects; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.subjects (
    id integer NOT NULL,
    "Name" text NOT NULL,
    semester integer
);


--
-- Name: subjects_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.subjects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: subjects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.subjects_id_seq OWNED BY public.subjects.id;


--
-- Name: tests; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tests (
    id integer NOT NULL,
    "subjectId" integer NOT NULL,
    "professorId" integer NOT NULL,
    "categoryId" integer NOT NULL,
    "pdfLink" text NOT NULL,
    "courseId" integer NOT NULL,
    year integer,
    "yearSemester" integer
);


--
-- Name: tests_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tests_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: tests_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tests_id_seq OWNED BY public.tests.id;


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: course-subjects id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."course-subjects" ALTER COLUMN id SET DEFAULT nextval('public."courses-subjects_id_seq"'::regclass);


--
-- Name: courses id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.courses ALTER COLUMN id SET DEFAULT nextval('public.courses_id_seq'::regclass);


--
-- Name: professors id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.professors ALTER COLUMN id SET DEFAULT nextval('public.professors_id_seq'::regclass);


--
-- Name: professorsSubjects id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."professorsSubjects" ALTER COLUMN id SET DEFAULT nextval('public."professors-subjects_id_seq"'::regclass);


--
-- Name: subjects id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subjects ALTER COLUMN id SET DEFAULT nextval('public.subjects_id_seq'::regclass);


--
-- Name: tests id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tests ALTER COLUMN id SET DEFAULT nextval('public.tests_id_seq'::regclass);


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.categories VALUES (1, 'P1');
INSERT INTO public.categories VALUES (2, 'P2');
INSERT INTO public.categories VALUES (3, 'P3');
INSERT INTO public.categories VALUES (4, '2ch');
INSERT INTO public.categories VALUES (5, 'Outras');


--
-- Data for Name: course-subjects; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."course-subjects" VALUES (1, 1, 1);
INSERT INTO public."course-subjects" VALUES (2, 2, 1);
INSERT INTO public."course-subjects" VALUES (3, 1, 2);
INSERT INTO public."course-subjects" VALUES (4, 2, 2);
INSERT INTO public."course-subjects" VALUES (5, 1, 3);
INSERT INTO public."course-subjects" VALUES (6, 1, 4);
INSERT INTO public."course-subjects" VALUES (7, 1, 5);
INSERT INTO public."course-subjects" VALUES (8, 2, 8);


--
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.courses VALUES (1, 'Engenharia Química');
INSERT INTO public.courses VALUES (2, 'Engenharia da Computação');


--
-- Data for Name: professors; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.professors VALUES (1, 'Maria do Socorro');
INSERT INTO public.professors VALUES (2, 'Jout Jout');
INSERT INTO public.professors VALUES (3, 'Esse Menino');
INSERT INTO public.professors VALUES (4, 'Sabrina Fernandes');
INSERT INTO public.professors VALUES (5, 'Minerva Mcgonagall');
INSERT INTO public.professors VALUES (6, 'Pomona Sprout');
INSERT INTO public.professors VALUES (7, 'Pabllo Vittar');


--
-- Data for Name: professorsSubjects; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."professorsSubjects" VALUES (1, 2, 3);
INSERT INTO public."professorsSubjects" VALUES (2, 3, 3);
INSERT INTO public."professorsSubjects" VALUES (3, 5, 1);
INSERT INTO public."professorsSubjects" VALUES (4, 5, 2);
INSERT INTO public."professorsSubjects" VALUES (5, 6, 4);
INSERT INTO public."professorsSubjects" VALUES (6, 1, 8);
INSERT INTO public."professorsSubjects" VALUES (7, 4, 5);
INSERT INTO public."professorsSubjects" VALUES (8, 2, 5);


--
-- Data for Name: subjects; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.subjects VALUES (1, 'Calculo 1', 1);
INSERT INTO public.subjects VALUES (2, 'Calculo 2', 2);
INSERT INTO public.subjects VALUES (3, 'Química Geral', 1);
INSERT INTO public.subjects VALUES (4, 'Química Orgânica', 2);
INSERT INTO public.subjects VALUES (5, 'Química Analítica', 2);
INSERT INTO public.subjects VALUES (8, 'Computação 1', 2);


--
-- Data for Name: tests; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tests VALUES (4, 3, 2, 2, 'https://www.globo.com/', 1, 2020, 1);


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.categories_id_seq', 5, true);


--
-- Name: courses-subjects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."courses-subjects_id_seq"', 8, true);


--
-- Name: courses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.courses_id_seq', 2, true);


--
-- Name: professors-subjects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."professors-subjects_id_seq"', 8, true);


--
-- Name: professors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.professors_id_seq', 7, true);


--
-- Name: subjects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.subjects_id_seq', 8, true);


--
-- Name: tests_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tests_id_seq', 4, true);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: course-subjects courses-subjects_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."course-subjects"
    ADD CONSTRAINT "courses-subjects_pkey" PRIMARY KEY (id);


--
-- Name: courses courses_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (id);


--
-- Name: professorsSubjects professors-subjects_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."professorsSubjects"
    ADD CONSTRAINT "professors-subjects_pkey" PRIMARY KEY (id);


--
-- Name: professors professors_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.professors
    ADD CONSTRAINT professors_pkey PRIMARY KEY (id);


--
-- Name: subjects subjects_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subjects
    ADD CONSTRAINT subjects_pkey PRIMARY KEY (id);


--
-- Name: tests tests_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT tests_pkey PRIMARY KEY (id);


--
-- Name: course-subjects courses-subjects_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."course-subjects"
    ADD CONSTRAINT "courses-subjects_fk0" FOREIGN KEY ("coursesId") REFERENCES public.courses(id);


--
-- Name: course-subjects courses-subjects_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."course-subjects"
    ADD CONSTRAINT "courses-subjects_fk1" FOREIGN KEY ("subjectsId") REFERENCES public.subjects(id);


--
-- Name: professorsSubjects professors-subjects_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."professorsSubjects"
    ADD CONSTRAINT "professors-subjects_fk0" FOREIGN KEY ("professorsId") REFERENCES public.professors(id);


--
-- Name: professorsSubjects professors-subjects_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."professorsSubjects"
    ADD CONSTRAINT "professors-subjects_fk1" FOREIGN KEY ("subjectsId") REFERENCES public.subjects(id);


--
-- Name: tests tests_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT tests_fk0 FOREIGN KEY ("subjectId") REFERENCES public.subjects(id);


--
-- Name: tests tests_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT tests_fk1 FOREIGN KEY ("professorId") REFERENCES public.professors(id);


--
-- Name: tests tests_fk2; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT tests_fk2 FOREIGN KEY ("categoryId") REFERENCES public.categories(id);


--
-- PostgreSQL database dump complete
--

