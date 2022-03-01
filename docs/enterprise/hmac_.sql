with query_string as (select * from (VALUES 'chd=t1:10,40,60,80,30,20|60,40,50,100,20,30&chs=999x600&cht=bvs&chxl=0:|Jan|Mar|Apr|May|Jun|Jul&chxt=x,y&chf=b0,lg,90,03a9f4,0,3f51b5,1&chm=D,03a9f4,1,0,5,1&icac=MY_ACCOUNT_ID') as t(qs))
select concat('https://image-charts.com/chart?', qs, '&ichm=', lower(to_hex(hmac_sha256(to_utf8(qs), to_utf8('MY_SECRET_KEY'))))) from query_string;
