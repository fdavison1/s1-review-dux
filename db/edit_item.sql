update items 
set name = $1
set price = $2
where id = $3;

select * from items;