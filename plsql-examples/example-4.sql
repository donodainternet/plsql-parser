CREATE PROCEDURE `TestProcedure`()
BEGIN
    DECLARE `testResult` INT;
    IF 5 > 3 THEN
        SET `testResult` = 1;
    ELSE
        SET `testResult` = 0;
    END IF;
    SELECT * FROM `users`;
    SELECT `testResult` AS 'Test Result';
END
