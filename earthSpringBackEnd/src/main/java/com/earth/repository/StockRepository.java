package com.earth.repository;

import com.earth.entity.Stock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StockRepository extends JpaRepository<Stock, Integer> {

//    @Query("Select s.id, s.userId, s.itemId, s.quantity, i.item " +
//            "FROM Stock s " +
//            "LEFT JOIN User u " +
//            "on s.id = u.id " +
//            "LEFT JOIN Item i " +
//            "on s.itemId = i.id " +
//            "where s.userId = ?1")
//    List<Stock> findStockByUserId(int userId);

    @Query("Select S from Stock S where S.userId.id=?1")
    List<Stock> findStockByUserId(int userId);


}
