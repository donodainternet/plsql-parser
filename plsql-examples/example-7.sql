CREATE FUNCTION `complex_function`(`input_param` INT) RETURNS DECIMAL(10, 2)
BEGIN
    DECLARE `result` DECIMAL(10, 2);
    DECLARE `factorial` DECIMAL(10, 2);
    DECLARE `i` INT;
    
    SET `result` = 1.0;
    SET `factorial` = 1.0;
    SET `i` = 1;
    
    WHILE `i` <= `input_param` DO
        SET `factorial` = `factorial` * `i`;
        SET `result` = `result` + 1.0 / `factorial`;
        SET `i` = `i` + 1;
    END WHILE;
    
    RETURN `result`;
END