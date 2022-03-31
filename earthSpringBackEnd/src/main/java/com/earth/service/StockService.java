package com.earth.service;

import com.earth.entity.Stock;
import com.earth.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockService {

    @Autowired
    StockRepository stockRepository;


    public List<Stock> listAllStock() {
        return stockRepository.findAll();
    }

    public List<Stock> listStockByUserId(int userId) {
        return stockRepository.findStockByUserId(userId);
    }


}
