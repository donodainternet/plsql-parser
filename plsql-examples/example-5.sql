CREATE PROCEDURE `complex_procedure`()
BEGIN
    DECLARE `var1` INT;
    DECLARE `var2` INT;
    DECLARE `total_records` INT;
    DECLARE `avg_value` FLOAT;
    
    SET `var1` = 0;
    SET `var2` = 0;
    
    WHILE `var1` < 10 DO
        SET `var2` = 0;
        WHILE `var2` < 5 DO
            INSERT INTO `example_table` (`column1`, `column2`)
            VALUES (`var1`, `var2`);
            
            SET `var2` = `var2` + 1;
        END WHILE;
        
        SET `var1` = `var1` + 1;
    END WHILE;
    
    SET `total_records` = `get_total_records`();
    
    SET `avg_value` = `calculate_average_value`(`example_table`.`column2`);
    
    INSERT INTO `summary_table` (`total_records`, `avg_value`)
    VALUES (`total_records`, `avg_value`);
    
    SELECT * FROM `summary_table`;
END