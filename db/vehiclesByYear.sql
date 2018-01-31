SELECT make, model, year, name FROM vehicles v
JOIN users u on v.owner_id = u.id
WHERE v.year > 2000
ORDER BY year DESC;