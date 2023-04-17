-- Your SQL goes here
CREATE TABLE Metadata (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMP
);
-- Your SQL goes here
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(64) NOT NULL UNIQUE,
    email VARCHAR(64) NOT NULL UNIQUE,
    actual_email VARCHAR(64) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    meta_id INTEGER NOT NULL UNIQUE,

    FOREIGN KEY (meta_id)
        REFERENCES Metadata(id)
);
-- Your SQL goes here
CREATE TABLE Secrets (
    id SERIAL PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    data TEXT NOT NULL,
    user_id INTEGER NOT NULL,
    meta_id INTEGER NOT NULL UNIQUE,

    UNIQUE (name, user_id),

    FOREIGN KEY (user_id)
        REFERENCES Users(id),
    FOREIGN KEY (meta_id)
        REFERENCES Metadata(id)
);

CREATE OR REPLACE FUNCTION fn_prevent_update_secrets_data()
    RETURNS trigger AS
$BODY$
    BEGIN
        RAISE EXCEPTION 'cannot update immutable field';
    END;
$BODY$
    LANGUAGE plpgsql VOLATILE
    COST 100;

CREATE TRIGGER trg_prevent_update_secrets_data
    BEFORE UPDATE OF id, name, data, user_id
    ON Secrets
    FOR EACH ROW
    EXECUTE PROCEDURE fn_prevent_update_secrets_data();

