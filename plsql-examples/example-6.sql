CREATE TRIGGER `complex_trigger`
BEFORE INSERT ON `orders`
FOR EACH ROW
BEGIN
    DECLARE `order_id` INT;
    DECLARE `product_id` INT;
    DECLARE `quantity` INT;
    DECLARE `total_price` DECIMAL(10, 2);
    
    SET `order_id` = NEW.`id`;
    SET `product_id` = NEW.`product_id`;
    SET `quantity` = NEW.`quantity`;
    
    SELECT `price` INTO `total_price`
    FROM `products`
    WHERE `id` = `product_id`;
    
    SET `total_price` = `total_price` * `quantity`;
    
    INSERT INTO `order_details` (`order_id`, `product_id`, `quantity`, `total_price`)
    VALUES (`order_id`, `product_id`, `quantity`, `total_price`);
    
    IF NEW.`quantity` > 10 THEN
        UPDATE `products`
        SET `stock` = `stock` - NEW.`quantity`
        WHERE `id` = `product_id`;
    END IF;
END