--  Source : https://leetcode.com/problems/delete-duplicate-emails/
--  Author : Charles Chen
--  Date   : 2018-04-03

/***************************************************************************************
 *
 * Write a SQL query to delete all duplicate email entries in a table named Person, keeping only unique emails based on its smallest Id.
 * 
 * +----+------------------+
 * | Id | Email            |
 * +----+------------------+
 * | 1  | john@example.com |
 * | 2  | bob@example.com  |
 * | 3  | john@example.com |
 * +----+------------------+
 * Id is the primary key column for this table.
 * For example, after running your query, the above Person table should have the following rows:
 * 
 * +----+------------------+
 * | Id | Email            |
 * +----+------------------+
 * | 1  | john@example.com |
 * | 2  | bob@example.com  |
 * +----+------------------+
 *  
 ***************************************************************************************/

# Write your MySQL query statement below
DELETE  a
FROM    Person AS a INNER JOIN Person AS b
ON      a.Email = b.Email
AND     a.Id > b.Id;
