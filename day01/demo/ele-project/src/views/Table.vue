<template>
  <el-table :data="emps" style="width: 100%">
    <el-table-column prop="id" label="ID"> </el-table-column>
    <el-table-column prop="name" label="姓名"> </el-table-column>
    <el-table-column label="年龄"> 
      <template slot-scope="scope">
        <b>{{scope.row.age}}</b> 周岁
      </template>
    </el-table-column>
    <el-table-column label="性别">
      <template slot-scope="scope">
        {{scope.row.gender=='F'?'女':'男'}}
      </template>
    </el-table-column>
    <el-table-column label="婚姻状况"> 
      <template slot-scope="scope">
        <el-tag v-if="scope.row.married" type="success">已婚</el-tag>
        <el-tag v-else type="danger">未婚</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <el-button type="danger" size="small">删除</el-button>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      // 员工数组
      emps: [
        {id:1001, name:"晓宇", age:18, married:false, gender:'F'},
        {id:1002, name:"亮哥", age:25, married:true, gender:'M'},
        {id:1003, name:"小新", age:36, married:true, gender:'M'},
        {id:1004, name:"朴总", age:41, married:true, gender:'M'},
      ]
    };
  },
};
</script>