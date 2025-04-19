<template>
    <div class="row">
        <div class="col-lg-12 col-md-12">
            <div class="card">
                <div class="card-body">
                    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    components: { Bar },
    data() {
        return {
            chartData: {
                labels: ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy', 'Chủ Nhật'],
                datasets: [
                    {
                        label: 'Doanh Thu (VND)',
                        backgroundColor: "#3498DB",
                        data: [1200000, 1900000, 300000, 500000, 200000, 300000, 700000]
                    }
                ]
            },
            chartOptions: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Thống Kê Doanh Thu Trong Tuần'
                    }
                }
            }
        }
    }
}
</script>
<style>
    
</style>
