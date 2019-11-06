update items 
set name = $1
where id = $2;

update items
set price = $3
where id = $2;

select * from items;