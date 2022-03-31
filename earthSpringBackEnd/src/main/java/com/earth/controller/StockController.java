package com.earth.controller;

import com.earth.entity.Item;
import com.earth.entity.Stock;
import com.earth.entity.User;
import com.earth.repository.ItemRepository;
import com.earth.repository.StockRepository;
import com.earth.repository.UserRepository;
import com.earth.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class StockController {

    @Autowired
    private StockRepository stockRepository;

    @Autowired
    private StockService stockService;

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private UserRepository userRepository;


//Start of Save Stock
    @RequestMapping(value = "/saveStock",
                    consumes = MediaType.APPLICATION_JSON_VALUE,
                    produces = MediaType.APPLICATION_JSON_VALUE,
                    method = RequestMethod.POST)
    public void submitStockDetails(@RequestBody Stock stock) {
        Optional<Item> opItem = itemRepository.findById(stock.getItemId().getId());
        Item item = null;
        if (!opItem.isPresent() ) {
            item = itemRepository.save(stock.getItemId());
        } else {
            item = opItem.get();
        }
        User user = userRepository.findById(stock.getUserId().getId()).get();
        stock.setUserId(user);
        stock.setItemId(item);
        stockRepository.save(stock);
    }


//    Start of get all stock list
    @RequestMapping(value = "/getAllStock",
                produces = MediaType.APPLICATION_JSON_VALUE,
                method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<List<Stock>> getAllStock() {
        List<Stock> allStock = stockService.listAllStock();
        return new ResponseEntity<>(allStock, HttpStatus.OK);
    }
//    -------------------------
//    end of get All Stock

//    get stock by user ID
    @RequestMapping(value = "getStockByUserId",
                 produces = MediaType.APPLICATION_JSON_VALUE,
                method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<List<Stock>> getStockByUserId(int userId) {
        List<Stock> allStockByUser = stockService.listStockByUserId(userId);

        return new ResponseEntity<>(allStockByUser, HttpStatus.OK);
    }

//    Start of get stock by user
    @RequestMapping(value = "/getStockById",
                produces = MediaType.APPLICATION_JSON_VALUE,
                method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<Optional<Stock>> findStockById(int id) {
        return new ResponseEntity<>(stockRepository.findById(id), HttpStatus.OK);
    }
//    --------------------------
//    end of get stock by Id

//    start of delete stock by ID
    @RequestMapping(value = "/deleteStock",
                method = RequestMethod.DELETE)
    @ResponseBody
    public ResponseEntity<Optional<Stock>> deleteStockById(int id) {
        stockRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
//---------------
// end of Delete a stock listing by ID

// Start of update quantity a stock listing by ID
    @RequestMapping(value = "/updateStock",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE,
            method = RequestMethod.PUT)
    @ResponseBody
    public ResponseEntity<Optional<Stock>> updateStock(@RequestBody Stock stock) {

        Stock updateStock = stockRepository.findById(stock.getId()).get();
        updateStock.setQuantity(stock.getQuantity());
        stockRepository.save(updateStock);
        return new ResponseEntity<>(HttpStatus.OK);
    }

// -----------
//    end of update stock by id
//    The above is only for increasing quantity of a certain item. Additional methods could be needed soon


}
