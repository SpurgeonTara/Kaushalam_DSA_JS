# SQL Questions
1. Find Second Highest Salary
```sql
SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);
```

2. Find Nth Highest Salary
```sql
SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET N-1;
```

3. Display Employee Count department Wise
```sql
SELECT department, COUNT(*) FROM employees GROUP BY department;
```

4. Find Duplicate Records
```sql
SELECT name, salary COUNT(*) FROM employees GROUP BY name, salary HAVING COUNT(*) > 1;
```

5. Retrieve Employees with Salary Greater Than Average
```sql
SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);
```

6. Get Highest Salary in Each Department
```sql
SELECT department, MAX(salary) FROM employees GROUP BY department; 
```

7. Write a query to fetch employees who joined in last 30 days
```sql
SELECT * FROM employees WHERE join_date >= DATE_SUB(CURRENT_DATE, INTERVAL 30 DAY);
```

8. Find EMployees WHose name starts with 'A'
```sql
SELECT * FROM employees WHERE name LIKE 'A%'
```

9. Find Total Salary of each Department
```sql
SELECT department, SUM(salary) FROM employees GROUP BY department;
```

10. Display Top 3 Salaries
```sql
SELECT DISTINCT salary FROM employees ORDER BY salary LIMIT 3;
```