-- Database: portal_noticias

-- DROP DATABASE portal_noticias;

CREATE DATABASE portal_noticias
    WITH
    OWNER = node
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'UTF-8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

CREATE SEQUENCE public.noticias_id_noticias_seq
    INCREMENT 1
    START 2
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE public.noticias_id_noticias_seq
    OWNER TO node;

    -- Table: public.noticias

    -- DROP TABLE public.noticias;

    CREATE TABLE public.noticias
    (
        id_noticias integer NOT NULL DEFAULT nextval('noticias_id_noticias_seq'::regclass),
        titulo character varying(100) COLLATE pg_catalog."default",
        noticia text COLLATE pg_catalog."default",
        data_criacao timestamp without time zone DEFAULT now(),
        CONSTRAINT noticias_pkey PRIMARY KEY (id_noticias)
    )
    WITH (
        OIDS = FALSE
    )
    TABLESPACE pg_default;

    ALTER TABLE public.noticias
        OWNER to node;
